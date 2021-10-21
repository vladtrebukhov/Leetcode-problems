class Solution {
    public boolean containsDuplicate(int[] nums) {
        Arrays.sort(nums);
        
        boolean containsDuplicate = false;
        
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] == nums[i - 1]) {
                containsDuplicate = true;
            };
        }
        
        return containsDuplicate;
    }
}