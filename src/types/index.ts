/* eslint-disable no-unused-vars */
// export interface Zoompan {
//   zoomIncrement: number;
//   maxZoom: number;
//   frames: number;
//   width: number;
//   height: number;
// }

// export interface VideoFilter {
//   zoompan?: Zoompan;
// }

export interface StartTime {
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
}

/**
 * Options for configuring FFmpeg commands.
 */
export interface FFmpegParams {
  /** Input file path. Equivalent to the `-i` option in FFmpeg. */
  input: string | string[];

  /** audio-only input path. Equivalent to the `-i` option in FFmpeg. */
  audio?: string;

  /** Whether to override the output file if it already exists. */
  override?: boolean;

  /** Output file path. This is a required field. */

  output: string;

  /** Duration of the output video in seconds. Equivalent to the `-t` option in FFmpeg. */
  duration?: number;

  /** Audio codec to use. Equivalent to the `-c:a` option in FFmpeg. */
  codecAudio?: 'copy' | 'aac';

  /** Number of times to loop the input. Equivalent to the `-loop` option in FFmpeg. */
  loop?: number;

  /** Frame rate of the output video. Equivalent to the `-r` option in FFmpeg. */
  framerate?: number;

  /** Video filter to apply. Equivalent to the `-vf` option in FFmpeg. */
  videoFilter?: string;

  /** Video codec to use. Equivalent to the `-c:v` option in FFmpeg. */
  codecVideo?: 'libx264';

  /** Pixel format of the output video. Equivalent to the `-pix_fmt` option in FFmpeg. */
  pixelFormat?: 'yuv420p';

  /** Mapping from input streams to output streams. Equivalent to the `-map` option in FFmpeg. If it's an Array, each field is a different -map added */
  map?: string | string[];

  /** Seeking position in the input file. Equivalent to the `-ss` option in FFmpeg for input seeking. */
  inputSeeking?: StartTime;

  /** Seeking position in the output file. Equivalent to the `-ss` option in FFmpeg for output seeking. */
  outputSeeking?: StartTime;

  /** set the number of video frames to record. Equivalent to the `-vframes` option in FFmpeg. */
  videoFrames?: number;
}