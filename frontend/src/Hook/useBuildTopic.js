import useGetTopicFromUsers from "./useGetTopicFromUsers";
import useGetCurrentUserId from "./useGetCurrentUserId";

export default function useBuildTopic() {
    const getTopicFromUsers = useGetTopicFromUsers()
    const currentUserId = useGetCurrentUserId()

    return function (otherUserId) {
        return getTopicFromUsers(currentUserId, otherUserId)
    }
}