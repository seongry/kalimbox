import { context, Synth } from "tone/build/esm";

const initializeSynth = () => {
    if (context.state !== "running") {
        context.resume();
    }
    const synth = new Synth();
    synth.oscillator.type = "sine";
    synth.toDestination();

    return synth;
};

const synth = initializeSynth();

interface StartSoundProps {
    code: string;
}
export const useAudioSound = () => {
    const playOneSound = ({ code }: StartSoundProps) => {
        synth.triggerAttackRelease(code, 0.1);
    };

    return {
        playOneSound,
    };
};
