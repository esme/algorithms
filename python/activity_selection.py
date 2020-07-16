def maximumActivities(activities):
    sortedActivities = sorted(activities, key=lambda activity: activity[1])
    prev = sortedActivities[0]
    n = 1
    for i in range(1, len(activities)):
        curr = activities[i]
        if curr[0] >= prev[1]:
            n += 1
            prev = curr
    print(sortedActivities)
    return n

print(maximumActivities([[1,2], [0,1], [3,5], [4,10]]))
print(maximumActivities([[1,1]]))
