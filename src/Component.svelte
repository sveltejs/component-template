<svelte:options tag="starter-component" />

<script>

  export let someattribute = '';

  function dispatchCustomEvent(e) {
    const event = new CustomEvent('somethinghappened', {
      bubbles: true,
      cancelable: true,
      composed: true // without this, the event cannot escape the shadow dom
    });

    this.dispatchEvent(event);
  }


</script>

<div on:click="{dispatchCustomEvent}">{someattribute}</div>