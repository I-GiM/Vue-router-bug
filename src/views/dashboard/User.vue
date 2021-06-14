<template>
  <div @click="$router.go(-1)" class="pt-10 max-w-294 px-8 pb-24">
    <div class="mt-6 flex items-center justify-between">
      <h4 class="text-title text-6 font-family-semibold">Application Details</h4>
      <p class="text-title text-sm ml-4">
        Status:
        <span class="px-5 py-1 rounded bg-warning-bg text-warning text-xs font-family-semibold ml-2">Pending</span>
      </p>
    </div>

    <div class="flex mt-10 border-b border-border">
      <router-link to="/user/info" :class="$route.params.select === 'info' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="cursor-pointer px-6 xl:text-sm text-2.5 flex items-center pb-1">
        Borrowers Information
      </router-link>

      <router-link to="/user/loan" :class="$route.params.select=== 'loan' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="cursor-pointer px-6 xl:text-sm text-2.5 flex items-center pb-1" style="margin: 0 16px;">
        Loan Details
      </router-link>
        
      <router-link to="/user/documents" :class="$route.params.select === 'documents' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="cursor-pointer px-6 xl:text-sm text-2.5 flex items-center pb-1">
        Documents
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'User',
  computed: {
    ...mapState({
      borrower: state => state.borrowerData
    })
  },
}
</script>

<style>

</style>