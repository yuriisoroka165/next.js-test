"use client";

import "hls-video-element";
import {
	MediaController,
	MediaControlBar,
	MediaTimeRange,
	MediaTimeDisplay,
	MediaVolumeRange,
	MediaPlayButton,
	MediaSeekBackwardButton,
	MediaSeekForwardButton,
	MediaMuteButton,
} from "media-chrome/dist/react";

export default function Video() {
	return (
		<MediaController>
			<hls-video
				slot="media"
				// src="rtmp://192.168.30.170:1935/hls25/stream"
				src="http://192.168.30.170:80/hls3/stream.m3u8"
				preload="auto"
				muted
				crossOrigin=""
			></hls-video>
			<MediaControlBar>
				<MediaPlayButton></MediaPlayButton>
				<MediaSeekBackwardButton></MediaSeekBackwardButton>
				<MediaSeekForwardButton></MediaSeekForwardButton>
				<MediaTimeRange></MediaTimeRange>
				<MediaTimeDisplay showDuration></MediaTimeDisplay>
				<MediaMuteButton></MediaMuteButton>
				<MediaVolumeRange></MediaVolumeRange>
			</MediaControlBar>
		</MediaController>
	);
}
