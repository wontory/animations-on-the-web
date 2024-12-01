import {
  BannedIcon,
  DangerIcon,
  FaceIDIcon,
  LockIcon,
  PassIcon,
  PhraseIcon,
  RecoveryPhraseIcon,
  ShieldIcon,
  WarningIcon,
} from "~/components/family-drawer/icons";
import { cn } from "~/utils/cn";

function Button({
  children,
  onClick,
}: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button
      type="button"
      data-vaul-no-drag=""
      className=" flex h-12 w-full items-center gap-[15px] rounded-[16px] bg-[#F7F8F9] px-4 font-semibold text-[#222222] text-[17px] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
  className,
}: { children: React.ReactNode; onClick: () => void; className?: string }) {
  return (
    <button
      type="button"
      data-vaul-no-drag=""
      className={cn(
        "flex h-12 w-full items-center justify-center gap-[15px] rounded-full text-center font-semibold text-[19px] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium",
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Header({
  icon,
  title,
  description,
}: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <header className="mt-[21px]">
      {icon}
      <h2 className="mt-2.5 font-semibold text-[#222222] text-[22px] md:font-medium">
        {title}
      </h2>

      <p className="mt-3 font-medium text-[#999999] text-[17px] leading-[24px] md:font-normal">
        {description}
      </p>
    </header>
  );
}

function Phrase({ setView }: { setView: (view: string) => void }) {
  return (
    <div>
      <div className="px-2">
        <Header
          icon={<RecoveryPhraseIcon />}
          title="Secret Recovery Phrase"
          description="Your Secret Recovery Phrase is the key used to back up your wallet. Keep it secret at all times."
        />
        <ul className="mt-6 space-y-4 border-[#F5F5F5] border-t pt-6">
          <li className="flex items-center gap-3 font-semibold text-[#999999] text-[15px] md:font-medium">
            <ShieldIcon />
            Keep your Secret Phrase safe
          </li>
          <li className="flex items-center gap-3 font-semibold text-[#999999] text-[15px] md:font-medium">
            <PassIcon />
            Don’t share it with anyone else
          </li>
          <li className="flex items-center gap-3 font-semibold text-[#999999] text-[15px] md:font-medium">
            <BannedIcon />
            If you lose it, we can’t recover it
          </li>
        </ul>
      </div>
      <div className="mt-7 flex gap-4">
        <SecondaryButton
          onClick={() => setView("default")}
          className="bg-[#F0F2F4] text-[#222222]"
        >
          Cancel
        </SecondaryButton>
        <SecondaryButton
          onClick={() => setView("default")}
          className="bg-[#4DAFFF] text-[#FFFFFF]"
        >
          <FaceIDIcon />
          Reveal
        </SecondaryButton>
      </div>
    </div>
  );
}

function Key({ setView }: { setView: (view: string) => void }) {
  return (
    <div>
      <div className="px-2">
        <Header
          icon={<RecoveryPhraseIcon />}
          title="Private Key"
          description="Your Private Key is the key used to back up your wallet. Keep it
			  secret and secure at all times."
        />
        <ul className="mt-6 space-y-4 border-[#F5F5F5] border-t pt-6">
          <li className="flex items-center gap-3 font-semibold text-[#999999] text-[15px] md:font-medium">
            <ShieldIcon />
            Keep your private key safe
          </li>
          <li className="flex items-center gap-3 font-semibold text-[#999999] text-[15px] md:font-medium">
            <PassIcon />
            Don’t share it with anyone else
          </li>
          <li className="flex items-center gap-3 font-semibold text-[#999999] text-[15px] md:font-medium">
            <BannedIcon />
            If you lose it, we can’t recover it
          </li>
        </ul>
      </div>
      <div className="mt-7 flex gap-4">
        <SecondaryButton
          onClick={() => setView("default")}
          className="bg-[#F0F2F4] text-[#222222]"
        >
          Cancel
        </SecondaryButton>
        <SecondaryButton
          onClick={() => setView("default")}
          className="bg-[#4DAFFF] text-[#FFFFFF]"
        >
          <FaceIDIcon />
          Reveal
        </SecondaryButton>
      </div>
    </div>
  );
}

function RemoveWallet({ setView }: { setView: (view: string) => void }) {
  return (
    <div>
      <div className="px-2">
        <Header
          icon={<DangerIcon />}
          title="Are you sure?"
          description="You haven’t backed up your wallet yet. If you remove it, you could lose access forever. We suggest tapping and backing up your wallet first with a valid recovery method."
        />
        <div className="mt-7 flex gap-4">
          <SecondaryButton
            onClick={() => setView("default")}
            className="bg-[#F0F2F4] text-[#222222]"
          >
            Cancel
          </SecondaryButton>
          <SecondaryButton
            onClick={() => setView("default")}
            className="bg-[#FF3F40] text-[#FFFFFF]"
          >
            Continue
          </SecondaryButton>
        </div>
      </div>
    </div>
  );
}

function DefaultView({ setView }: { setView: (view: string) => void }) {
  return (
    <>
      <header className="mb-4 flex h-[72px] items-center border-[#F7F7F7] border-b pl-2">
        <h2 className="font-semibold text-[#222222] text-[19px] md:font-medium">
          Options
        </h2>
      </header>
      <div className="space-y-3">
        <Button
          onClick={() => {
            setView("key");
          }}
        >
          <LockIcon />
          View Private Key
        </Button>
        <Button
          onClick={() => {
            setView("phrase");
          }}
        >
          <PhraseIcon />
          View Recovery Phase
        </Button>
        <button
          type="button"
          className="flex h-12 w-full items-center gap-[15px] rounded-[16px] bg-[#FFF0F0] px-4 font-semibold text-[#FF3F40] text-[17px] transition-transform focus:scale-95 focus-visible:shadow-focus-ring-button active:scale-95 md:font-medium"
          onClick={() => {
            setView("remove");
          }}
        >
          <WarningIcon />
          Remove Wallet
        </button>
      </div>
    </>
  );
}

export {
  Button,
  DefaultView,
  Header,
  Key,
  Phrase,
  RemoveWallet,
  SecondaryButton,
};
