import { Component, OnInit } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Amplify Player POC';

  wavesurfer = null;
  wavesurfer2 = null;
  wavesurfer3 = null;


  ngOnInit() {

    this.wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'red',
      progressColor: 'purple',
      height: 64
    });

    this.wavesurfer2 = WaveSurfer.create({
      container: '#waveform2',
      waveColor: 'red',
      progressColor: 'purple',
      height: 64
    });

    this.wavesurfer3 = WaveSurfer.create({
      container: '#waveform3',
      waveColor: 'red',
      progressColor: 'purple',
      height: 64
    });

    try {
      this.wavesurfer.load('../wave-poc/assets/music3.mp3');
      this.wavesurfer2.load('../wave-poc/assets/music3.mp3');
      this.wavesurfer3.load('../wave-poc/assets/music3.mp3');
    }
    catch (e) {
      console.log(e);
    }

  }

  playMusic() {
    this.wavesurfer.playPause();
  }
  playMusic2() {
    this.wavesurfer2.playPause();
  }
  playMusic3() {
    this.wavesurfer3.playPause();
  }

}
