import * as Tone from "tone/build/esm";

const initializeSynth = () => {
    const synth = new Tone.Synth();
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
