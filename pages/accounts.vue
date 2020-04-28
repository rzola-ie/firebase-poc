<template>
  <div class="container">
    <Card title="Accounts">
      accounts page, cool!
    </Card>
  </div>
</template>

<script>
import Card from '@/components/card'

export default {
  components: {
    Card
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>