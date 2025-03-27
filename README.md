# Focus-TV with Utilities

## Overview

This is a WebXR experience built using React and Three.js, featuring an interactive video screen with dynamic clip selection, subtitles, and custom controls.

## Project Structure

### Key Components

1. **VideoScreen**: A custom React Three Fiber component that manages:

   - Video playback
   - Clip selection
   - Real-time subtitles
   - Interactive 3D controls

2. **Custom Hooks**:
   - `useClips`: Parses and manages video clip markers
   - `useSubtitles`: Handles real-time subtitle rendering
   - `useVideoTextureControls`: Provides advanced video control methods

### Key Features

- Dynamic clip selection
- Real-time subtitle tracking
- 3D interactive video screen
- Performance monitoring with r3f-perf

## Workflow with Adobe Premiere Pro

### Timeline Markers (clips.csv)

Adobe Premiere Pro was used to generate precise timeline markers, which are exported to the `clips.csv` file. These markers define:

- Clip names
- Start and end times
- Segmentation points for the video

### Subtitles (subtitles.csv)

The subtitle generation process was streamlined using Adobe Premiere Pro, creating a CSV file with:

- Start times
- End times
- Subtitle text
- Layer information

## Technical Stack

- React 19
- React Three Fiber
- Three.js
- Zustand (state management)
- TypeScript

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm start
   ```

## Performance Optimization

- Memoized components
- Lazy loading of video resources
- Performance monitoring with r3f-perf

## License

[Insert your license information here]

## Credits

Created with creativity and precision, leveraging the power of React Three Fiber and Adobe Premiere Pro.
