<template>
  <div class="container">
    <Card title="Sign In">
      <form id="form" @submit.prevent="onSubmit">
        please sign in to reorder.
        <div class="input-group">
          <input type="text" id="email" placeholder="Email" v-model="email" />
        </div>

        <div class="input-group">
          <input
            type="password"
            id="password"
            placeholder="Password"
            v-model="password"
          />
        </div>

        <input type="submit" value="Sign In" />
      </form>
    </Card>
  </div>
</template>

<script>
import firebase from 'firebase'
import Card from '@/components/card'

export default {
  components: {
    Card
  },
  data() {
    return {
      email: null,
      password: null,
      isLoggedIn: false
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password)
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
          this.email = ''
          this.password = ''
          this.$router.replace('/accounts')
        })
        .catch(function(error) {
          document.getElementById('message').innerHTML = error.message
        })
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #009ee3;

  margin: 0;
  line-height: 0.8;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

#form {
  width: 100%;
  max-width: 378px;
  margin: 0 auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#form * {
  transition: all 150ms ease-in-out;
}

#form input[type='password'] {
  letter-spacing: 4px;
}

#form input[type='password']::placeholder {
  letter-spacing: 0;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  height: 40px;
  background-color: #fafafa;
  border: 1px solid #999;
  border-radius: 0.25rem;
  padding-left: 1rem;
  margin: 1rem auto;
  font-size: 18px;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.15);
  transition: color 150ms ease-in-out, background-color 150ms ease-in-out,
    border-color 150ms ease-in-out, box-shadow 150ms ease-in-out;
}

input[type='text']:focus,
input[type='password']:focus {
  outline: none;
  box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.15), 0 0 0 0.2rem rgba(#009ee3, 0.5);
}

input[type='submit'] {
  display: inline-block;
  height: 60px;
  width: 100%;
  max-width: 300px;
  padding: 6px 12px;
  padding: 0.375rem 0.3rem;
  margin: 2rem auto 0 auto;
  font-size: 20px;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.01em;
  line-height: 1em;
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #255bc7;
  color: white;
  cursor: pointer;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
}

.logout {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
