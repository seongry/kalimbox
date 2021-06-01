<script lang="ts">
  import { Route, Router } from "svelte-routing";
  import Main from "./page/Main.svelte";
</script>

<Router url="/">
  <Route path="/" component={Main} />
</Router>
