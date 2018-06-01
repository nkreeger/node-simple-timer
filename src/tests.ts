import { Timer } from ".";

function timeout(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

describe('should autostart', () => {
  it('should allow autostart', async () => {
    const timer = new Timer(true);
    await timeout(1000);
    const ms = timer.milliseconds();
    expect(ms).toBeGreaterThan(1000);
    expect(ms).toBeLessThan(1009);
  });
  
  it('should not autostart by default', async () => {
    const timer = new Timer();
    await timeout(1000);
    const ms = timer.milliseconds();
    console.log('ms', ms);
    expect(ms).toBeGreaterThan(0.0);
    expect(ms).toBeLessThan(0.1);
  });

  it('should chain calls', async () => {
    const timer = new Timer();
    timer.start();
    await timeout(500);

    const ms = timer.end().milliseconds();
    expect(ms).toBeGreaterThan(500);
    expect(ms).toBeLessThan(509);
  });
});