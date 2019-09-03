import Obniz from 'obniz';
import PCA9685 from 'pca9685';
import { ServoMotor } from 'obniz/parts/Moving/ServoMotor';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

const obniz = new Obniz('7836-4186');

obniz.onconnect = async function() {
  const pwm = obniz.getFreePwm();
  pwm.start({io:0}); // start pwm. output at io0
  pwm.freq(1000);
  pwm.duty(50);
  
  const servo0 = obniz.wired("ServoMotor", {signal:0});
  const servo1 = obniz.wired("ServoMotor", {signal:1});
  const servo2 = obniz.wired("ServoMotor", {signal:2});
  const servo3 = obniz.wired("ServoMotor", {signal:3});

  await moveToPiano('do', servo0, servo1, servo2, servo3);
  await moveToPiano('re', servo0, servo1, servo2, servo3);
  await moveToPiano('mi', servo0, servo1, servo2, servo3);
  await moveToPiano('fa', servo0, servo1, servo2, servo3);
  await moveToPiano('so', servo0, servo1, servo2, servo3);
  await moveToPiano('ra', servo0, servo1, servo2, servo3);
  await moveToPiano('si', servo0, servo1, servo2, servo3);
  await moveToPiano('Do', servo0, servo1, servo2, servo3);
}

type soundType = "do" | "re" | "mi" | "fa" | "so" | "ra" | "si" | "Do";
const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));
async function moveToPiano(soundCode: soundType, servo0: ServoMotor, servo1: ServoMotor, servo2: ServoMotor, servo3: ServoMotor) {
  const pianoPlace = {
    "do": { servo0: 85, servo1: 140, servo2: 100, servo3: 93.6},
    "re": { servo0: 85, servo1: 140, servo2: 100, servo3: 103},
    "mi": { servo0: 85, servo1: 140, servo2: 100, servo3: 113},
    "fa": { servo0: 85, servo1: 140, servo2: 100, servo3: 123},
    "so": { servo0: 85, servo1: 140, servo2: 100, servo3: 134},
    "ra": { servo0: 85, servo1: 90, servo2: 0, servo3: 140},
    "si": { servo0: 85, servo1: 90, servo2: 0, servo3: 148},
    "Do": { servo0: 85, servo1: 90, servo2: 0, servo3: 155}
  };
  await servo0.angle(pianoPlace[soundCode]['servo0']);
  await servo2.angle(140);
  await servo3.angle(pianoPlace[soundCode]['servo3']);
  await servo1.angle(pianoPlace[soundCode]['servo1']);
  await sleep(1000);
  await servo2.angle(pianoPlace[soundCode]['servo2']);
  await sleep(1000);
}