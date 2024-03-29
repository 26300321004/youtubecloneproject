"use client";

import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import { Terminal } from '@mui/icons-material';




const Videos = ({videos, direction}) => {
  return (
    <Stack direction={ direction|| 'row'} flexWrap={"wrap"} justifyContent={"start"} gap={2}>

    {
        videos.map((item, index)=>(
            <Box key={index}>
{
    item.id.videoId && <VideoCard video={item}/>
}

{
  item.id.channelId && <ChannelCard channelDetail={item}/>
}
            </Box>
        ))
    }

    </Stack>
  )
}

export default Videos
