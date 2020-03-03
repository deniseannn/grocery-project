<template>
  <div id=app>
    <h1>Add Item Page</h1>
    <form id="fm1">
        <label>Item Name</label>
        <input type="text"/>
        <label>Item Code</label>
        <input type="text"/>
        <label>Item Category</label>
        {{selected}}
        <select v-model = "selected">
          <option disabled value = "">PLease select one</option>
          <option>Dairy</option>
          <option>Meat</option>
          <option>Produce</option>
          <option>Frozen Food</option>
          <option>Canned Goods</option>
          <option>Personal Care</option>
          <option>Others</option>
        </select>
        <button type = "submit">Submit</button>   
    </form>
  </div>
</template>

<script>

export default {
  
  data(){
    return{
        
        msg:"Add Item"
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#app *{
    box-sizing: border-box;
}
#app{
    margin: 20px auto;
    max-width: 500px;
}

p{
    align-content: center;
    color:ivory;
}
label{
    display: inline-block;
    margin: 20px 0 10px;
    width:50%;
    align-content:left;

}
input[type="text"]{
    display: inline-block;
    padding: 8px;
    width:50%;
}

button{
    background-color:rgb(139, 158, 190);
    font-size:25px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    display:inline-block;
    padding:10px 30px;
}
</style>