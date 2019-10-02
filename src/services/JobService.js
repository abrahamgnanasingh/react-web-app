const JobService = {
    jobs: null,

    getJobs() {
      return this.jobs
    },
    
    setJobs(jobs) {
      this.jobs = jobs;
    }
};

export default JobService;