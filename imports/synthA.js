//var Tone = require("Tone");
import Tone, { Synth } from "tone";

var synthA = new Tone.Synth({
	  oscillator : {
  	    type : 'fmsquare',
        modulationType : 'sawtooth',
        modulationIndex : 3,
        harmonicity: 3.4
    },
    envelope : {
  	    attack : 0.001,
        decay : 0.1,
        sustain: 0.1,
        release: 0.1
    }
}).toMaster();

export default synthA;
