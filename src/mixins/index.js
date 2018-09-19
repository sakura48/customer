export const mixin = {
    data() {
        return {
            protocol: window.location.protocol,
            host: window.location.host,
            port: window.location.port
        }
    },
    computed: {
        url() {
            return `${this.protocol}//${this.host}`
        }
    }
}
