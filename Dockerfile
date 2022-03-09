ARG BASE_IMAGE=node:16.14.0-alpine


# Install dependencies only when needed
FROM $BASE_IMAGE AS deps
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

# Rebuild the source code only when needed
FROM $BASE_IMAGE AS builder
WORKDIR /usr/src/app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY . .
RUN npm run build


# Production image, copy all the files and run next
FROM $BASE_IMAGE AS runner
WORKDIR /usr/src/app
ENV NODE_ENV production
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodeuser -u 1001
COPY --from=builder /usr/src/app/package.json ./package.json
COPY --from=builder --chown=nodeuser:nodejs /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
EXPOSE 8080
ENV PORT 8080

CMD [ "npm", "start" ]