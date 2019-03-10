const FIRST_PAGE = 0;

export default {

    data () {
        return {
            currentPage: FIRST_PAGE,
            noMore: false,
            loading: false,
            moreLoading: false,
            noData: false,
            networkError: false,
			
        }
    },

    computed: {
        loadingType () {
			//1开启，0停止，没有更多数据
			if (this.noMore) return 2;
			if (this.moreLoading) return 1;
			return 0;
        },
        dataStatus () {
            if (this.noData) return 'empty';
            if (this.networkError) return 'network';
            return '';
        }
    },

    onPullDownRefresh () {
        this.loading = true;
        this.reset();
        this.fetch();
    },

    onReachBottom () {
        if (this.moreLoading || this.noMore) return;
        this.moreLoading = true;
        this.fetch();
    },

    methods: {
        reset () {
			this.noMore = false;
			this.currentPage = FIRST_PAGE;
			this.loading = false;
			this.noData = false;
        },

        loadMoreSuccessHandle (list) {
			
            if (list.length === 0) {
                this.noMore = true;
                if (this.currentPage === FIRST_PAGE) this.noData = true;
            }
            this.currentPage += 1;

            uni.stopPullDownRefresh()
		
            this.loading = false;
			
            this.moreLoading = false;
			
            this.networkError = false;
			
        },

        loadMoreErrorHandle (error) {
            if (!error || error.status !== 200) {
                this.networkError = true;
            } else {
                this.showError(error);
            }
            uni.stopPullDownRefresh()
            this.loading = false;
            this.moreLoading = false;
        },

        retry () {
            if (this.loading) return;
            this.loading = true;
            uni.startPullDownRefresh();
            this.fetch();
        }

    },


}