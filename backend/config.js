module.exports = {
  // redis: {
  //   uri: "redis://redis:6379",
  //   ttl: 604800000,
  //   secret: process.env.REDIS_SECRET,
  //   name: "userSessions",
  // },
  mongo: {
    uri: 'mongodb+srv://asugar13:pasaporte@cluster0.ork4pfe.mongodb.net/?retryWrites=true&w=majority'
    ,//process.env.MONGO_URI,
  },
  // pubnub: {
  //   publish_key: process.env.PUBNUB_PUBLISH_KEY,
  //   subscribe_key: process.env.PUBNUB_SUBSCRIBE_KEY,
  //   secret_key: process.env.PUBNUB_SECRET_KEY,
  // },
  // zoom: {
  //   client_id: process.env.ZOOM_CLIENT_ID,
  //   client_secret: process.env.ZOOM_CLIENT_SECRET,
  // },
  // disqus: {
  //   public_key: process.env.DISQUS_PUBLIC_KEY,
  //   secret_key: process.env.DISQUS_SECRET_KEY,
  // },
  // credentials: {
  //   eventbride: {
  //     redirect_uri: process.env.EVENTBRIDE_REDIRECT_URI,
  //   },
  // },
  // port: 4000,
  // filesystem: {
  //   incubators: "/incubators",
  //   workspaces: "/workspaces",
  //   articles: "/articles",
  //   companies: "/companies",
  //   courses: "/courses",
  //   events: "/events",
  //   jobs: "/jobs",
  //   investors: "/investors",
  //   images: "/images",
  //   users: "/users",
  //   collaborationRooms: "/collaboration-rooms",
  //   collaborationRoomBoards: "/collaboration-room-boards",
  // },
  // digitalOceanSpaces: {
  //   endpoint: process.env.DIGITAL_OCEAN_SPACES_ENDPOINT,
  //   accessKeyId: process.env.DIGITAL_OCEAN_SPACES_ACCESS_KEY_ID,
  //   secretAccessKey: process.env.DIGITAL_OCEAN_SPACES_SECRET_ACCESS_KEY,
  //   bucket: process.env.DIGITAL_OCEAN_SPACES_BUCKET,
  // },
  // maxPinnedItemsLimit: 5,
  // paging: {
  //   defaultSize: 10,
  //   defaultSkip: 0,
  // },
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  //   expiresIn: "24h",
  // },
  // smtp: {
  //   host: process.env.SMTP_HOST,
  //   port: process.env.SMTP_PORT,
  //   auth: {
  //     user: process.env.SMTP_USER?.replace(/_/g, " "),
  //     pass: process.env.SMTP_PASS,
  //   },
  // },
  // domain: process.env.DOMAIN,
  // mode: process.env.MODE,
  // instance: process.env.INSTANCE,
}