<script>

</script>

<template>
    <div id = 'login'>
        <h1>Log in to UniApp</h1>
        <div class="topnav">
            <a class="active" href="#elimuuniversity">Elimu University</a>
          </div>
        <form action="action_page.php" method="post">
          
            <div class="container">
              <label for="uname"><b>Email</b></label>
              <input type="text" placeholder="Enter Email" name="email" required>
          
              <label for="psw"><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required>
          
              <button type="submit">Login</button>
              <label>
                <input type="checkbox" checked="checked" name="remember"> Remember me
              </label>
            </div>
          
            <div class="container" style="background-color:#f1f1f1">
              <button type="button" class="cancelbtn">Cancel</button>
              <span class="psw"><a href="#">Forgot password?</a></span>
            </div>
          </form>
        
    </div>

</template>