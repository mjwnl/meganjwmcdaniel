figma.showUI(__html__, { width: 320, height: 180 });

figma.ui.onmessage = (msg: { type?: string }) => {
  if (msg?.type === "create-rectangle") {
    const rect = figma.createRectangle();
    rect.x = figma.viewport.center.x - 50;
    rect.y = figma.viewport.center.y - 50;
    rect.resize(100, 100);
    rect.fills = [{ type: "SOLID", color: { r: 0.4, g: 0.2, b: 1 } }];
    figma.currentPage.appendChild(rect);
    figma.currentPage.selection = [rect];
    figma.viewport.scrollAndZoomIntoView([rect]);
  }
  figma.closePlugin();
};
