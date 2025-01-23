type containerOptions = { id: string; mountNode?: HTMLElement };

export const createContainerPortal = ({
  id,
  mountNode = document.body,
}: containerOptions) => {
  if (document.getElementById(id)) {
    return;
  }

  const portalContainer = document.createElement('div');

  portalContainer.setAttribute('id', id);
  mountNode.appendChild(portalContainer);
};
