import time
import numpy as np
import cv2
import mediapipe as mp

class Squats:
    def __init__(self, totalCount):
        self.totalCount = totalCount


    def get_angle(self, p1, p2, p3):
        a = {'x': p1.x - p2.x, 'y': p1.y - p2.y}
        b = {'x': p3.x - p2.x, 'y': p3.y - p2.y}
        theta = np.arccos((a['x'] * b['x'] + a['y'] * b['y'])/ (np.sqrt(np.square(a['x']) + np.square(a['y'])) * np.sqrt(np.square(b['x']) + np.square(b['y']))))
        return theta

    def run(self):
        start = time.time()
        mp_pose = mp.solutions.pose
        mp_drawing = mp.solutions.drawing_utils
        mp_drawing_styles = mp.solutions.drawing_styles
        state = 'reset'
        count = 0

        cap = cv2.VideoCapture(0, cv2.CAP_DSHOW)
        with mp_pose.Pose(
            min_detection_confidence=0.5,
            min_tracking_confidence=0.5) as pose:
            while cap.isOpened():
                success, image = cap.read()
                image = cv2.flip(image, 1)
                if not success: 
                    continue
                image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
                results = pose.process(image)
                if results.pose_landmarks:
                    p1 = results.pose_landmarks.landmark[23]
                    p2 = results.pose_landmarks.landmark[25]
                    p3 = results.pose_landmarks.landmark[27]
                    p4 = results.pose_landmarks.landmark[24]
                    p5 = results.pose_landmarks.landmark[26]
                    p6 = results.pose_landmarks.landmark[28]
                    if p1.visibility > 0.5 and p2.visibility > 0.5 and p3.visibility > 0.5:
                        angle = self.get_angle(p1, p2, p3)
                        if state == 'reset' and angle < 1.2:
                            count += 1
                            state = 'set'
                        if state == 'set' and angle > 2.4:
                            state = 'reset'
                        image = cv2.putText(image, str(count), (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2, cv2.LINE_AA)
                    elif p4.visibility > 0.5 and p5.visibility > 0.5 and p6.visibility > 0.5:
                        angle = self.get_angle(p4, p5, p6)
                        if state == 'reset' and angle < 1.2:
                            count += 1
                            state = 'set'
                        if state == 'set' and angle > 2.4:
                            state = 'reset'
                        image = cv2.putText(image, str(count), (50, 50), cv2.FONT_HERSHEY_SIMPLEX, 2, (0, 0, 255), 2, cv2.LINE_AA)
                image = cv2.cvtColor(image, cv2.COLOR_RGB2BGR)
                mp_drawing.draw_landmarks(
                    image,
                    results.pose_landmarks,
                    mp_pose.POSE_CONNECTIONS,
                landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style())
                if count == self.totalCount:
                    return time.time() - start
                cv2.imshow('MediaPipe Pose', image)
                if cv2.waitKey(5) & 0xFF == 27:
                    break
        cap.release()
        cv2.destroyAllWindows()