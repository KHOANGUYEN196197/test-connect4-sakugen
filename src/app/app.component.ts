import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';
import { Tile } from '../models/title';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  canvas: any;
  strokeColor = 0;
  player1Turn = true;
  red: any;
  blue: any;
  piece: any;
  height: any;
  width: any;

  constructor() {}

  ngOnInit() {
    const sketch = (s: any) => {
      s.setup = () => {
        this.height = 500;
        this.width = 510;
        const canvas2 = s.createCanvas(this.width, this.height);
        canvas2.parent = 'sketch-holder';
        // centerCanvas();
        this.red = s.color(255, 48, 48);
        this.blue = s.color(0, 238, 238);

        // instantiate first
        this.piece = [];
        // load second
        for (let r = 0; r < 6; r++) {
          // define array one grid value at a time
          this.piece[r] = [];
          for (let c = 0; c < 7; c++) {
            this.piece[r][c] = new Tile(40 + c * 70, 110 + r * 70);
          }
        }
      };

      s.draw = () => {
        s.fill(241, 255, 52);
        s.rect(0, 70, 501, 430);
        for (let r = 0; r < 6; r++) {
          for (let c = 0; c < 7; c++) {
            s.fill(this.piece[r][c].getColor());
            s.ellipse(this.piece[r][c].getX(), this.piece[r][c].getY(), 60, 60);
          }
        }

        if (this.player1Turn) {
          s.fill(255);
          s.textAlign(s.CENTER);
          s.textSize(50);
          s.text('Player 2', 250, 50);
          s.fill(255, 0, 0);
          s.textAlign(s.CENTER);
          s.textSize(50);
          s.text('Player 1', 250, 50);
        } else {
          s.fill(255);
          s.textAlign(s.CENTER);
          s.textSize(50);
          s.text('Player 1', 250, 50);
          s.fill(0, 0, 255);
          s.textAlign(s.CENTER);
          s.textSize(50);
          s.text('Player 2', 250, 50);
        }
      };

      const dropChecker = (slot: any, color: any) => {
        const red = s.color(255, 48, 48);
        const blue = s.color(0, 238, 238);
        for (let i = 5; i >= 0; i--) {
          if (this.piece[i][slot].getName() === 'white') {
            this.piece[i][slot].setName('checker');
            this.piece[i][slot].setColor(color);
            break;
          }
        }
        this.player1Turn = !this.player1Turn;
        console.log('ddeeed', this.player1Turn);
      };

      s.touchStarted = () => {
        if (this.player1Turn) {
          //bat toa do mau do de nhan
          if (s.mouseX > 10 && s.mouseX < 70) {
            dropChecker(0, this.red);
          } else if (s.mouseX > 80 && s.mouseX < 140) {
            dropChecker(1, this.red);
          }
          if (s.mouseX > 150 && s.mouseX < 210) {
            dropChecker(2, this.red);
          }
          if (s.mouseX > 220 && s.mouseX < 280) {
            dropChecker(3, this.red);
          }
          if (s.mouseX > 290 && s.mouseX < 350) {
            dropChecker(4, this.red);
          }
          if (s.mouseX > 360 && s.mouseX < 420) {
            dropChecker(5, this.red);
          }
          if (s.mouseX > 430 && s.mouseX < 490) {
            dropChecker(6, this.red);
          }
          //   console.log('do',s.mouseX);

          return;
        } else {
          //bat toa do mau xanh de nhan
          if (s.mouseX > 10 && s.mouseX < 70) {
            dropChecker(0, this.blue);
          }

          if (s.mouseX > 80 && s.mouseX < 140) {
            dropChecker(1, this.blue);
          }

          if (s.mouseX > 150 && s.mouseX < 210) {
            dropChecker(2, this.blue);
          }

          if (s.mouseX > 220 && s.mouseX < 280) {
            dropChecker(3, this.blue);
          }

          if (s.mouseX > 290 && s.mouseX < 350) {
            dropChecker(4, this.blue);
          }

          if (s.mouseX > 360 && s.mouseX < 420) {
            dropChecker(5, this.blue);
          }

          if (s.mouseX > 430 && s.mouseX < 490) {
            dropChecker(6, this.blue);
          }
          //  console.log('xanh',s.mouseX);

          return;
        }
      };
    };
    this.canvas = new p5(sketch);
    console.log(this.canvas);
  }
}
