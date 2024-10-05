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
