#include <iostream>
#include <cmath>
#include <vector>

#include <fstream> //file op

// constants
const double G = 6.674e-11;    // gravitational constant
const double c = 299792458;     // speed of light

// structure to represent a 3D point
struct Point {
    double x, y, z;
Point(double x_, double y_, double z_) : x(x_), y(y_), z(z_) {}

Point operator+(const Point& other) const {
        return {x + other.x, y + other.y, z + other.z};
    }

Point operator-(const Point& other) const {
        return {x - other.x, y - other.y, z - other.z};
    }

};
