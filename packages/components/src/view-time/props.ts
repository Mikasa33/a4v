import type dayjs from 'dayjs'
import type { PropType } from 'vue'
import { makeStringProp } from '../utils'

export const viewTimeProps = Object.assign({}, {
  format: makeStringProp('YYYY-MM-DD HH:mm:ss'),
  value: {
    type: [Number, String, Date, Object] as PropType<string | number | Date | dayjs.Dayjs>,
    default: () => new Date(),
  },
})
