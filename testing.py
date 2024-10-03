import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation

G = 6.67430e-11
c = 3.0e8

M1 = 10
M2 = 5 
R_s1 = (2 * G * M1 * 1.98847e30) / c**2
R_s2 = (2 * G * M2 * 1.98847e30) / c**2 #Schwarzschild rad of 2nd BH