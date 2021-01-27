import React from "react";

export const MoodContext = React.createContext(
    {
        moods: [],
        handleMoodsChange: (mood) => {}
    }
);