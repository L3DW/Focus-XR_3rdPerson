# 🎥 Focus-TV with Utilities

## 🌟 Overview

Focus-TV is a WebXR experience built using **React** and **Three.js**, featuring an interactive video screen with dynamic clip selection, real-time subtitles, and custom 3D controls.

---

## 📂 Project Structure

### 🔑 Key Components

1. **🎬 VideoScreen**: A custom React Three Fiber component that manages:
   - Video playback
   - Clip selection
   - Real-time subtitles
   - Interactive 3D controls

2. **⚙️ Custom Hooks**:
   - `useClips`: Parses and manages video clip markers.
   - `useSubtitles`: Handles real-time subtitle rendering.
   - `useVideoTextureControls`: Provides advanced video control methods.

---

## ✨ Key Features

- 🎥 **Dynamic Clip Selection**: Seamlessly switch between video clips.
- 📝 **Real-Time Subtitle Tracking**: Subtitles synced with video playback.
- 🖥️ **3D Interactive Video Screen**: Immersive and interactive controls.
- 📊 **Performance Monitoring**: Integrated with `r3f-perf` for real-time performance insights.

---

## 🎞️ Workflow with Adobe Premiere Pro

### 📌 Timeline Markers (`clips.csv`)

Adobe Premiere Pro was used to generate precise timeline markers, which are exported to the `clips.csv` file. These markers define:

- 🎥 Clip names
- ⏱️ Start and end times
- 📊 Segmentation points for the video

### 📝 Subtitles (`subtitles.csv`)

The subtitle generation process was streamlined using Adobe Premiere Pro, creating a CSV file with:

- ⏱️ Start times
- ⏱️ End times
- 📝 Subtitle text
- 📚 Layer information

---

## 🛠️ Technical Stack

The project leverages the following technologies:

- ⚛️ **React 19**: A JavaScript library for building user interfaces.
- 🎨 **React Three Fiber**: A React renderer for Three.js.
- 🌌 **Three.js**: A 3D library for rendering and animating 3D graphics.
- 🖋️ **Zustand**: A small, fast, and scalable state management library.
- 📊 **r3f-perf**: A performance monitoring tool for React Three Fiber.
- 🧠 **@react-three/drei**: Useful helpers for React Three Fiber.
- 🌐 **WebXR**: For immersive AR/VR experiences.

---

## 🚀 Getting Started

Follow these steps to set up and run the project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-repo/Focus-TV_with_Utils.git
   cd Focus-TV_with_Utils
   ```

2. **Install dependencies**:
   Ensure you have [Node.js](https://nodejs.org/) installed, then run:
   ```bash
   npm install
   ```

3. **Run the development server**:
   Start the app locally:
   ```bash
   npm start
   ```

4. **Open the app**:
   - Navigate to `http://localhost:3000` in your browser.

5. **Build for production** (optional):
   To create a production build, run:
   ```bash
   npm run build
   ```

---

## ⚡ Performance Optimization

- 🧠 **Memoized Components**: Reduces unnecessary re-renders.
- 🎥 **Lazy Loading**: Optimized video resource loading.
- 📊 **Performance Monitoring**: Integrated with `r3f-perf` for real-time insights.

---

## 🙌 Credits

Created with creativity and precision, leveraging the power of **React Three Fiber** and **Adobe Premiere Pro**.

