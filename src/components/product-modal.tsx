import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {ArrowRight, X} from "@phosphor-icons/react";

import {getCurrentDate} from "@/lib/utils";

interface ProductModalProps {
  open: boolean;
  onCancel: () => void;
}

export function ProductModal({open, onCancel}: ProductModalProps) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <div className="flex justify-between items-center">
            <AlertDialogTitle>Cs2 hack GC e Faceit</AlertDialogTitle>
            <AlertDialogCancel onClick={onCancel}>
              <X size={16} />
            </AlertDialogCancel>
          </div>
          <AlertDialogDescription>
            CS2 HACK GC FACEIT E OUTROS INDETECTÁVEL - Counter Strike <br />
            <div className="mt-2 flex flex-row items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <p className="text-white">
                Status: indetectável até hoje ({`${getCurrentDate()}`})
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div>
          <h3 className="font-bold mb-4">Funções</h3>

          <ul className="flex flex-col gap-3">
            <li className="flex items-baseline gap-2">
              <ArrowRight size={16} />

              <div className="flex flex-col gap-2">
                <span>Aimbot Humanizado</span>
                <p className="text-zinc-400 text-xs max-w-xs">
                  Aimbot ON/OFF, Aimbot Key, Aimbot Key Smooth, Aimbot FOV, E
                  mais...
                </p>
              </div>
            </li>

            <li className="flex items-baseline gap-2">
              <ArrowRight size={16} />

              <div className="flex flex-col gap-2">
                <span>Aimbot Unique Build</span>
              </div>
            </li>

            <li className="flex items-baseline gap-2">
              <ArrowRight size={16} />

              <div className="flex flex-col gap-2">
                <span>VAC & VACLive Bypass</span>
              </div>
            </li>

            <li className="flex items-baseline gap-2">
              <ArrowRight size={16} />

              <div className="flex flex-col gap-2">
                <span>Limpador de Registros</span>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">FAQ - Perguntas Frequentes</h3>

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <span className="text-left font-normal">
                  Posso ser banido com o aimbot?
                </span>
              </AccordionTrigger>
              <AccordionContent>
                Não há absolutamente nenhuma chance de ser banido! Nosso
                software foi desenvolvido por profissionais, e as chances de ser
                detectado pelo anti-cheat são nulas.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <span className="text-left font-normal">
                  Como é realizado o envio do produto?
                </span>
              </AccordionTrigger>
              <AccordionContent>.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <span className="text-left font-normal">
                  Em caso de atualizações, terei que comprar novamente para ter
                  acesso?
                </span>
              </AccordionTrigger>
              <AccordionContent>.</AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-2 items-center py-6 justify-center w-1/2 border-2 border-zinc-900 rounded-md">
            <span className="font-bold text-lg">Plano mensal</span>
            <strong className="font-bold">R$ 39,99</strong>
            <button className="mt-4 w-auto h-8 bg-[#6D28D9] hover:bg-[#5826A6] rounded-full py-2 px-6 flex items-center">
              Comprar
            </button>
          </div>

          <div className="relative flex flex-col gap-2 items-center py-6 justify-center w-1/2 border-2 border-zinc-900 rounded-md">
            <div className="absolute top-0 left-0 right-0 rounded-t-md bg-[#6D28D9] text-center h-7">
              <span className="text-xs">apenas 5 disponíveis</span>
            </div>

            <span className="font-bold text-lg mt-7">Plano vitalício</span>
            <strong className="font-bold">R$ 109,99</strong>
            <button className="mt-4 w-auto h-8 bg-[#6D28D9] hover:bg-[#5826A6] rounded-full py-2 px-6 flex items-center">
              Comprar
            </button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
