#!/usr/bin/env node

import { randomBytes } from 'node:crypto';

console.log(randomBytes(32).toString('hex'));
