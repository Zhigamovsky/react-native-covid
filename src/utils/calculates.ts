interface ICalculateAge {
  (from: Date, to: Date): number
}
export const _calculateAge: ICalculateAge = (from, to) => {
  let today = to;
  let birthDate = new Date(from);
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

interface ICalculateMonths {
  (from: Date, to: Date): number
}
export const _calculateMonths: ICalculateMonths = (from, to) => {
  let today = from;
  let timeDiff = Math.abs(to.getTime() - today.getTime());
  let months = Math.round(timeDiff / (2e3 * 3600 * 365.25))
  return months;
}

// export const MINIMUM_AGE: number = 18
// export const MINIMUM_EXPIRED_LICENSE_DATE: number = 1
// export const MINIMUM_EXPIRED_INSURANCE_DATE: number = 1

export const _parseFloat = <T extends string>(value: T) => {
  const regex = /[+-]?\d+(\.\d+)?/g;
  const floats = value.match(regex)?.map((v) => parseFloat(v));
  return floats ? floats[0] + '' : ''
}