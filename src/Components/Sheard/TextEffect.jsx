"use client"

import { TextGenerateEffect } from "../ui/text-generate-effect";


const TextEffect = ( {words} ) => {
    return (
        <div>
            <TextGenerateEffect words={words} />
        </div>
    );
};

export default TextEffect;