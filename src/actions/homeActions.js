export const UPDATE_TIME = 'UPDATE_TIME'

export function updateTime(time) {
  return {
    type: UPDATE_TIME,
    time: time
  }
}
