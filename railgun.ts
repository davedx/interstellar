import { G, g, c, AU, LY, A_Centauri_A_dist_LY } from "./constants";

const MAX_TIME = 60 * 60 * 24 * 50; // 50 DAYS

const to_c_ratio = (val: number) => {
  return (val / c).toFixed(2);
};

const to_AU_ratio = (val: number) => {
  return (val / AU).toFixed(2);
};

const run = (accel_in_g: number, velocity_in_c: number) => {
  let v = 0;
  let dist = 0,
    max_vel = velocity_in_c * c;
  const accel_in_ms2 = accel_in_g * g;
  for (let i = 0; i < MAX_TIME; i++) {
    v += accel_in_ms2;
    dist += v;
    if (i < 100) {
      //console.log(`v=${v}m/s dist=${dist}m`);
    }
    if (v >= max_vel) {
      console.log(
        `Terminal velocity of ${to_c_ratio(
          v
        )}c reached at distance ${to_AU_ratio(dist)} AU`
      );
      const p = ((dist / (LY * A_Centauri_A_dist_LY)) * 100).toFixed(2);
      console.log(`${p}% to Alpha Centauri A`);
      return;
    }
  }
  console.log(
    `Velocity of ${to_c_ratio(v)}c reached at distance ${to_AU_ratio(
      dist
    )} AU in ${MAX_TIME} s`
  );
};

run(10, 0.8);
