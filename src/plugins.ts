import type { Plugin } from 'vue'
import Avatar from './avatar/Avatar.vue'
import { Button } from './button'

import { Link } from './link'

function avatarPlugin(app: any): void {
  app.component('Avatar', Avatar)
}

const plugins: Plugin[] = [Link, Button, avatarPlugin]

export default plugins
