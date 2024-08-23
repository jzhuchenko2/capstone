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
Point operator*(double scalar) const {
        return {x * scalar, y * scalar, z * scalar};
    }
Point operator/(double scalar) const {
    // making sure scalar is not zero to avoid division by zero
        if (scalar != 0.0) {
            return {x / scalar, y / scalar, z / scalar};
        } else {
            // handle division by zero gracefully (we'll probably need to adjust as needed)
            std::cerr << "Error: Division by zero.\n";
            return *this;  // Return original value
        }
    }
};
