import Obniz from 'obniz';
import PCA9685 from 'pca9685';
import { ServoMotor } from 'obniz/parts/Moving/ServoMotor';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';

const obniz = new Obniz('7836-4186');

obniz.onconnect = async function() {  
  const servo0 = null;
  const servo1 = obniz.wired("ServoMotor", {signal:1});
  const servo2 = obniz.wired("ServoMotor", {signal:2});
  const servo3 = obniz.wired("ServoMotor", {signal:3});

  await servo1.angle(180);
  await servo2.angle(180);

  await moveToPiano('Do', servo0, servo1, servo2, servo3);
  await moveToPiano('si', servo0, servo1, servo2, servo3);
  await moveToPiano('ra', servo0, servo1, servo2, servo3);
  await moveToPiano('so', servo0, servo1, servo2, servo3);
  await moveToPiano('fa', servo0, servo1, servo2, servo3);
  await moveToPiano('mi', servo0, servo1, servo2, servo3);
  await moveToPiano('re', servo0, servo1, servo2, servo3);
  await moveToPiano('do', servo0, servo1, servo2, servo3);

  process.stdin.on('data', async function (chunk) {
    const lineString = chunk.toString().split(' ');
    const line = lineString.map( (x:any) => x = parseInt(x) );
    obniz.display.clear();
    obniz.display.print(lineString);
    await servo3.angle(line[2]);
    await sleep(2000);
    await servo1.angle(line[0]);
    await servo2.angle(line[1]);
    await servo3.angle(line[2]);
    await sleep(3000);
    await servo1.angle(180);
    await servo2.angle(180);
  });
}

type soundType = "do" | "re" | "mi" | "fa" | "so" | "ra" | "si" | "Do";
const sleep = (msec: number) => new Promise(resolve => setTimeout(resolve, msec));
async function moveToPiano(soundCode: soundType, servo0: null, servo1: ServoMotor, servo2: ServoMotor, servo3: ServoMotor) {
  const pianoPlace = {
    "Do": { servo0: 82, servo1: 105, servo2: 110, servo3: 82},
    "si": { servo0: 82, servo1: 130, servo2: 124, servo3: 88},
    "ra": { servo0: 82, servo1: 140, servo2: 124, servo3: 100},
    "so": { servo0: 82, servo1: 152, servo2: 136, servo3: 110},
    "fa": { servo0: 82, servo1: 152, servo2: 136, servo3: 120},
    "mi": { servo0: 82, servo1: 150, servo2: 133, servo3: 133},
    "re": { servo0: 82, servo1: 150, servo2: 130.7, servo3: 143},
    "do": { servo0: 82, servo1: 142, servo2: 124, servo3: 153},
  };

  await servo3.angle(pianoPlace[soundCode]['servo2']);
  await sleep(1500);
  await servo1.angle(pianoPlace[soundCode]['servo1']);
  await servo2.angle(pianoPlace[soundCode]['servo2']);
  await servo3.angle(pianoPlace[soundCode]['servo3']);
  await sleep(1500);
  await servo1.angle(180);
  await servo2.angle(180);
}