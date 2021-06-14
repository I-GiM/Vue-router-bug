<template>
  <div class="max-w-294 pt-8 px-8 pb-21">
    <div class="rounded-lg border border-border pt-3 pb-4 pl-5 pr-6">
      <div class="flex items-center">
        <span class="text-title text-xs">Filter by:</span>
        <div class="ml-3.5">
          <span class="text-xs text-title px-3 py-1 border border-border rounded-tl rounded-bl cursor-pointer">Custom</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-border cursor-pointer">7D</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">30D</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">3M</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">6M</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">9M</span>
          <span class="text-xs text-title px-3 py-1 border border-border rounded-tr rounded-br cursor-pointer">12M</span>
        </div>
      </div>

      <div class="mt-3 border-t border-border pt-4 grid grid-cols-4 divide-x">
        <div class="py-2">
          <h6 class="text-title text-xs">Total Number of Borrowers</h6>
          <p class="text-title mt-1 text-4 xl:text-5 xxl:text-6 font-family-semibold">
            {{ String(6768886).replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
          </p>
        </div>
        <div class="pl-5 py-2">
          <h6 class="text-title text-xs">Loan Amount Disbursed</h6>
          <p class="text-title mt-1 text-4 xl:text-5 xxl:text-6 font-family-semibold">
            {{ formatNumber(6768886) }}
          </p>
        </div>
        <div class="pl-5 py-2">
          <h6 class="text-title text-xs">Interest Earnings</h6>
          <p class="text-title mt-1 text-4 xl:text-5 xxl:text-6 font-family-semibold">
            {{ formatNumber(6768886) }}
          </p>
        </div>
        <div class="pl-5 py-2">
          <h6 class="text-title text-xs">Interest Earnings</h6>
          <p class="text-title mt-1 text-4 xl:text-5 xxl:text-6 font-family-semibold">
            {{ formatNumber(6768886) }}
          </p>
        </div>
      </div>
    </div>

    <div class="mt-6 flex items-center">
      <h4 class="text-title text-6 font-family-semibold">Applications</h4>
      <p class="text-title text-sm ml-4">Showing 1 - 10 of 97</p>
    </div>

    <div class="mt-8">
      <div class="border-b border-border flex items-start justify-between h-10">
        <div class="flex">
          <router-link to="/origination/pending?page=1&limit=10" :class="$route.params.tab === 'pending' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="px-6 xl:text-sm text-2.5 flex items-center pb-2">
            Pending requests
            <div :class="$route.params.tab === 'pending' ? 'font-family-semibold' : ''" class="rounded-lg ml-2 py-1.5 px-2 text-2.5 bg-secondary flex items-center justify-center">972</div>
          </router-link>

          <router-link to="/origination/approved?page=1&limit=10" :class="$route.params.tab === 'approved' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="px-6 xl:text-sm text-2.5 flex items-center pb-2">
            Approved loans
            <div :class="$route.params.tab === 'approved' ? 'font-family-semibold' : ''" class="rounded-lg ml-2 py-1.5 px-2 text-xs bg-secondary flex items-center justify-center">172</div>
          </router-link>
          
          <router-link to="/origination/rejected?page=1&limit=10" :class="$route.params.tab === 'rejected' ? 'border-b-4 border-primary text-primary font-family-semibold' : ''" class="px-6 xl:text-sm text-2.5 flex items-center pb-2">
            Rejected loans
            <div :class="$route.params.tab === 'rejected' ? 'font-family-semibold' : ''" class="rounded-lg ml-2 py-1.5 px-2 text-xs bg-secondary flex items-center justify-center">56</div>
          </router-link>
        </div>

        <div class="">
          <span class="text-xs text-title px-3 py-1 border border-border rounded-tl rounded-bl cursor-pointer">Custom</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-border cursor-pointer">7D</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">30D</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">3M</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">6M</span>
          <span class="text-xs text-title px-3 py-1 border-t border-b border-l border-border cursor-pointer">9M</span>
          <span class="text-xs text-title px-3 py-1 border border-border rounded-tr rounded-br cursor-pointer">12M</span>
        </div>
      </div>
    </div>

    <div class="mt-3 pb-2 border-b border-border application-layout">
      <h6 class="text-title font-family-semibold text-xs">Loan ID</h6>
      <h6 class="text-title font-family-semibold text-xs">Borrowers' Name</h6>
      <h6 class="text-title font-family-semibold text-xs">Email Address</h6>
      <h6 class="text-title font-family-semibold text-xs">Phone Number</h6>
      <h6 class="text-title font-family-semibold text-xs">Amount Requested</h6>
      <h6 class="text-title font-family-semibold text-xs">Loan Type</h6>
    </div>

    <div v-if="$route.params.tab === 'pending'">
      <application
        v-for="data in this.appData"
        :key="data.id"
        :resultClass="'py-6 border-b border-border application-layout'"
        :loanID="data.loanID"
        :name="data.name"
        :email="data.email"
        :phone="data.phone"
        :amount="formatNumber(data.amount).replace(/\D00(?=\D*$)/, '')"
        :loanType="data.loanType"
        @detailsLink="goToUser(data.id)"
      />
    </div>
    
    <div v-if="$route.params.tab === 'approved'">
      <application
        v-for="data in this.appData.slice(0, 5)"
        :key="data.id"
        :resultClass="'py-6 border-b border-border application-layout'"
        :loanID="data.loanID"
        :name="data.name"
        :email="data.email"
        :phone="data.phone"
        :amount="formatNumber(data.amount).replace(/\D00(?=\D*$)/, '')"
        :loanType="data.loanType"
        @detailsLink="goToUser(data.id)"
      />
    </div>
    
    <div v-if="$route.params.tab === 'rejected'">
      <application
        v-for="data in this.appData.slice(5, 8)"
        :key="data.id"
        :resultClass="'py-6 border-b border-border application-layout'"
        :loanID="data.loanID"
        :name="data.name"
        :email="data.email"
        :phone="data.phone"
        :amount="formatNumber(data.amount).replace(/\D00(?=\D*$)/, '')"
        :loanType="data.loanType"
        @detailsLink="goToUser(data.id)"
      />
    </div>

    <div class="mt-5 flex items-center justify-between">
      <div class="flex items-center text-title text-sm">
        Show
        <div class="flex items-center ml-2 mr-4">
          <select v-model="entriesPerPage" @change="changeLimit(perPage)" name="" id="" class="z-10 bg-transparent cursor-pointer border border-border rounded w-12 px-2 py-1 focus:outline-none focus:border-primary text-xs">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
          <svg class="-ml-5 z-0" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1996 0.300781L11.0481 1.14931L5.82387 6.37357L0.599609 1.14931L1.44814 0.300781L5.82387 4.67652L10.1996 0.300781Z" fill="#6D7D93"/>
          </svg>
        </div>
        entries per page
      </div>

      <div class="flex items-center">
        <button @click="onPageChange(1)" :disabled="isInFirstPage" :class="isInFirstPage ? 'hidden' : ''" class="px-2 py-1 border border-border rounded text-xs focus:outline-none focus:border-primary">First</button>

        <button @click="onPageChange(currentPage - 1)" :disabled="isInFirstPage" :class="isInFirstPage ? 'hidden' : ''" class="mx-5 focus:outline-none focus:ring-1 ring-primary">
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.07324 9.6L5.22471 10.4485L0.000449429 5.22426L5.22471 -3.70903e-08L6.07324 0.848528L1.69751 5.22426L6.07324 9.6Z" fill="#121F3E"/>
          </svg>
        </button>

        <button v-for="(page, p) in pages" :key="p" @click="onClickPage(page.name)" :disabled="page.isDisabled" :class="isPageActive(page.name) ? 'bg-primary text-white' : 'text-title border border-border'" class="w-7 py-1 mx-0.5 rounded text-xs focus:outline-none">{{ page.name }}</button>

        <button @click="onPageChange(currentPage + 1)" :disabled="isInLastPage" :class="isInLastPage ? 'hidden' : ''" class="mx-5 focus:outline-none focus:ring-1 ring-primary">
          <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.926759 1.4L1.77529 0.551471L6.99955 5.77574L1.77529 11L0.926758 10.1515L5.30249 5.77574L0.926759 1.4Z" fill="#121F3E"/>
          </svg>
        </button>
        
        <button @click="onPageChange(totalPages)" :disabled="isInLastPage" :class="isInLastPage ? 'hidden' : ''" class="px-2 py-1 border border-border rounded text-xs focus:outline-none focus:border-primary">Last</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
// import Application from '../../../components/origination/Application.vue'

export default {
  name: 'Origination-Base',
  components: {
    // Application
  },
  created() {
    this.$router.push(this.$route.path + '?page=1&limit=10')
  },
  mounted() {
    this.$store.dispatch('setData')
  },
  computed: {
    ...mapState({
      appData: state => state.applicationData
    }),
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) { 
        return this.totalPages - this.maxVisibleButtons + 1;
      }

      return this.currentPage - 1;
    },
    endPage() {
      return Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
    },
    pages() {
      const range = [];

      for (let i = this.startPage; i <= this.endPage; i+= 1 ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage 
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    },
    entriesPerPage() {
      return this.$route.query.limit
    },
    currentPage() {
      return Number(this.$route.query.page)
    }
  },
  data() {
    return {
      maxVisibleButtons: 5,
      totalPages: 11,
      total: 200,
      perPage: 10
    }
  },
  methods: {
    formatNumber(num) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'NGN' }).format(num)
    },
    onClickPage(page) {
      console.log(page)
      // this.currentPage = page;
      this.$router.push({
        query: {
          page,
          limit: '10'
        }
      })
    },
    onPageChange(page) {
      console.log(page)
      // this.currentPage = page;
      this.$router.push({
        query: {
          ...this.$route.query,
          page
        }
      })
    },
    changeLimit(num) {
      this.$router.push({
        query: {
          ...this.$route.query,
          limit: String(num)
        }
      })
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
    goToUser(id) {
      this.$store.commit('SET_BORROWER_DATA', this.appData.filter(b => b.id === id))
      this.$router.push(`/user/info?id=${id}`)
    }
  }
}
</script>

<style scoped>
.application-layout {
  display: grid;
  grid-template-columns: 75px 1.5fr 1.5fr 140px 130px 90px 0.8fr;
}
@media (min-width: 1280px) {
  .application-layout {
    grid-template-columns: 75px 235px 235px 125px 137px 93px 1fr;
  }
}
@media (min-width: 1366px) {
  .application-layout {
    grid-template-columns: 80px 240px 240px 130px 142px 98px 1fr;
  }
}
@media (min-width: 1440px) {
  .application-layout {
    grid-template-columns: 90px 250px 250px 140px 152px 108px 1fr;
  }
}
select {
  -webkit-appearance: none;
}
</style>