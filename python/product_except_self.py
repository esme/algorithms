class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        product_left = [1]
        product_right = 1
        res = []
        length = len(nums)

        for i in range(1, length):
            product_left.append(product_left[i - 1] * nums[i - 1])

        for i in reversed(range(length)):
            res.insert(0, product_left[i] * product_right)
            product_right *= nums[i]

        return res

sol = Solution()
print(sol.productExceptSelf([1, 2, 3]))
print(sol.productExceptSelf([9, 0, -2]))
