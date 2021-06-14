<template>
  <div @click="$router.go(-1)" class="pt-10 max-w-294 px-8 pb-24">
    <button class="flex items-center text-tour-text font-family-semibold">
      <svg class="mr-2" width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5415 6.22917L14.0415 6.22917" stroke="#5A6474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6.58301 11.2498L1.54134 6.22982L6.58301 1.20898" stroke="#5A6474" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Origination
    </button>

    <div class="mt-6 flex items-center justify-between">
      <h4 class="text-title text-6 font-family-semibold">Application Details</h4>
      <p class="text-title text-sm ml-4">
        Status:
        <span class="px-5 py-1 rounded bg-warning-bg text-warning text-xs font-family-semibold ml-2">Pending</span>
      </p>
    </div>

    <div class="flex mt-10 border-b border-border">
      <span @click.prevent="view = 'info'" :class="view === 'info' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="cursor-pointer px-6 xl:text-sm text-2.5 flex items-center pb-1">
        Borrowers Information
      </span>

      <span @click.prevent="view = 'loan'" :class="view === 'loan' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="cursor-pointer px-6 xl:text-sm text-2.5 flex items-center pb-1">
        Loan Details
      </span>
        
      <router-link :to="`/user/documents?id=${borrower.id}`" :class="view === 'documents' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="cursor-pointer px-6 xl:text-sm text-2.5 flex items-center pb-1">
        Documents
      </router-link>
    </div>
    <transition>
      <div class="" v-if="view === 'info'">info</div>
      <div class="" v-if="view === 'loan'">loan</div>
      <div class="" v-if="view === 'documents'">documents</div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Details',
  computed: {
    ...mapState({
      borrower: state => state.borrowerData
    })
  },
  data() {
    return {
      view: 'info'
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>