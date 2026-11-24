/**Mocked data */
export default function() {
  console.debug("metrics/compute/mocks > mocking graphql api result > notable/history")
  return {
    user: {
      contributionsCollection: {
        commitContributionsByRepository: [],
      },
    },
  }
}
