<script setup>

  import { ref } from 'vue'

  const showModal = ref(false)
  const newNote = ref("")
  
  const notes = ref([])

  const getRandomColor = () => {
    let color ="hsl("+Math.random()*360+", 100%, 75%)"
    return color
  }

  const addNote = () => {
    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      text: newNote.value,
      date: new Date(),
      backgroundColor: getRandomColor()
    })

    showModal.value = false
    newNote.value = ""
  }

</script>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newNote" name="note" id="note" cols="30" rows="10"></textarea>
        <button @click="addNote()">Add Note</button>
        <button @click="showModal=false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      {{ notes }}
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="card-container">
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere ex est nobis reiciendis mollitia in similique debitis suscipit hic vel modi expedita consequatur minima itaque non, error delectus ab.</p>
          <p class="date">04/27/2023</p>
        </div>
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere ex est nobis reiciendis mollitia in similique debitis suscipit hic vel modi expedita consequatur minima itaque non, error delectus ab.</p>
          <p class="date">04/27/2023</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

main {
  width: 100vw;
  height: 100vh;
}

.container {
  max-width: 1000px;
  padding: 10pc;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {

  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;

}

header button { 
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 100%;
  color: white;
  font-size: 20px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.date {
  font-size: 12.5px;
  font-weight: bold;
}

.card-container {
  display: flex;
  flex-wrap: nowrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.777);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal .close {
  background-color: red;
  margin-top: 7px;
}

</style>