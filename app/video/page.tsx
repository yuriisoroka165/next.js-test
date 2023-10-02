"use client";

import React from "react";
import ReactPlayer from "react-player";

export default function Video() {
	const hlsStreams = [
		"http://192.168.30.170:80/hls1/stream.m3u8",
		"http://192.168.30.170:80/hls2/stream.m3u8",
		"http://192.168.30.170:80/hls3/stream.m3u8",
		"http://192.168.30.170:80/hls4/stream.m3u8",
		"http://192.168.30.170:80/hls5/stream.m3u8",
		"http://192.168.30.170:80/hls6/stream.m3u8",
		"http://192.168.30.170:80/hls7/stream.m3u8",
		"http://192.168.30.170:80/hls8/stream.m3u8",
		"http://192.168.30.170:80/hls9/stream.m3u8",
		"http://192.168.30.170:80/hls10/stream.m3u8",
		"http://192.168.30.170:80/hls11/stream.m3u8",
		"http://192.168.30.170:80/hls12/stream.m3u8",
		"http://192.168.30.170:80/hls13/stream.m3u8",
		"http://192.168.30.170:80/hls14/stream.m3u8",
		"http://192.168.30.170:80/hls15/stream.m3u8",
		"http://192.168.30.170:80/hls16/stream.m3u8",
	];
	return (
		<div style={{ display: "flex", flexWrap:"wrap" }}>
			{hlsStreams.map((stream, index) => (
				<div style={{ flexGrow: 1, flexBasis: 400 }} key={index}>
					<ReactPlayer
						url={stream}
						playing
						controls
						width="100%"
						height="240px"
					/>
				</div>
			))}
		</div>
	);
}
