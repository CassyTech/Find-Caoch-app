
export default {
    requests(state, _, _2, rootGetters) {
        const CoachId = rootGetters.userId
        return state.requests.filter(req => req.CoachId === CoachId );
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
}