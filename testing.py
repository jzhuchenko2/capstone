import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

G = 6.67430e-11
c = 3.0e8

M1 = 10
M2 = 5 
R_s1 = (2 * G * M1 * 1.98847e30) / c**2
R_s2 = (2 * G * M2 * 1.98847e30) / c**2 #Schwarzschild rad of 2nd BH

L4_x = R_s2 * np.cos(np.pi/3)
L4_x = R_s2 * np.cos(np.pi/3)
L4_z = 0

num_frames = 100
theta_vals = np.linspace(0, 4 * np.pi, num_frames) # thetaaa values for the animation

fig = plt.figure(figsize=(10, 8)) #first plot
ax = fig.add_subplot(111, projection='3d')

black_hole1, = ax.plot([0], [0], [0], marker='o', color='black', markersize=10) #messin with the plots
black_hole2, = ax.plot([L4_x], [L4_y], [L4_z], marker='o', color='blue', markersize=10)

satellite_line, = ax.plot([], [], [], color='red', linewidth=2) #line width change for bH animation

satellite, = ax.plot([], [], [], marker='o', color='green', markersize=5)

def update(frame):
  theta1 = theta_vals[frame]
  theta2 = theta_vals[frame] #always two thetas and adjust if needed for different motion
  black_hole1_x = L4_x + R_s1 * np.cos(theta2)
  black_hole1_y = L4_y + R_s1 * np.sin(theta2)
